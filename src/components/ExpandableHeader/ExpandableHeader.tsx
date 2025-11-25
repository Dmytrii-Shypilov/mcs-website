"use client";

import s from "./exp-header.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, complex } from "framer-motion";
import { Icons } from "../ui/icons/icons";
import { MenuStructure } from "./structure";
import Image from "next/image";
import Button from "../ui/Button/Button";

const ExpandableHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpened] = useState<boolean>(false);
  const [menu, setMenu] = useState<{
    section: string;
    subsection: string | null;
    slide: string | null;
  }>({
    section: MenuStructure[0].section,
    subsection: MenuStructure[0].subsections[0].name,
    slide: MenuStructure[0].subsections[0].slides[0].name,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<"main" | "submenu" | "slide">(
    "main"
  );

  // const [slide, setSlide] = useState<{name: string, content: {image: string, text: string} } | null>(
  //   MenuStructure[0].subsections[0]
  // );

  const router = useRouter();

  // PROGRAMMATIC MEDIA QUERY
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 468px)");

    setIsMobile(mediaQuery.matches);

    const onMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobile(true);
    };

    mediaQuery.addEventListener("change", onMediaChange);

    return () => mediaQuery.removeEventListener("change", onMediaChange);
  }, []);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // DYNAMIC CLASSES

  const navClass = isMenuOpen ? s.header_nav_open : s.header_nav;
  const headerClass = isMenuOpen ? s.header_open : s.header;

  // CONTENT FOR RENDER

  const sectionContent = MenuStructure.filter(
    (sec) => sec.section === menu.section
  )[0];

  const subMenuContent = menu.subsection
    ? sectionContent.subsections.filter(
        (sub) => sub.name === menu.subsection
      )[0].slides
    : sectionContent.slides;

  console.log(subMenuContent);

  const slideContent =
    menu.slide && subMenuContent
      ? subMenuContent.filter((slide) => slide.name === menu.slide)[0]
      : { name: sectionContent.section, content: sectionContent.content };

  // SECTION DISPLAY CONDITIONS (WITH MOBILE)
  const isMainInView = (isMobile && mobileView === "main") || !isMobile;
  const isSubmenuInView = (isMobile && mobileView === "submenu") || !isMobile;
  const isSlideInView = (isMobile && mobileView === "slide") || !isMobile;

  // EVENT HANDLERS

  const onHomeNavigate = () => {
    router.push("/");
    setIsMenuOpened(false);
  };

  const onMenuToggle = () => {
    setIsMenuOpened(!isMenuOpen);
    setMenu({
      section: MenuStructure[0].section,
      subsection: MenuStructure[0].subsections[0].name,
      slide: MenuStructure[0].subsections[0].slides[0].name,
    });
  };

  const onSectionSelect = (name: string, isComplex: boolean) => {
    if (name !== menu.section) {
      if (isComplex) return;
      const section = MenuStructure.filter((sec) => sec.section === name)[0];
      const sectionSlides = section.slides;
      setMenu({
        section: name,
        subsection: null,
        slide: sectionSlides.length ? sectionSlides[0].name : null,
      });
      setMobileView(section.slides.length ? "submenu" : "slide");
    }
  };

  const onSubsectionSelect = (context: string, name: string) => {
    if (name !== menu.subsection) {
      const slide = MenuStructure.filter(
        (el) => el.section === context
      )[0].subsections.filter((s) => s.name === name)[0].slides[0];
      setMenu({
        section: context,
        subsection: name,
        slide: slide.name,
      });
    }
    setMobileView("submenu");
  };

  const onSlideSelect = (name: string) => {
    setMenu((prevState) => {
      return {
        ...prevState,
        slide: name,
      };
    });
    setMobileView("slide");
  };

  const onSlideClose = (toSubmenu: boolean) => {
    setMobileView(toSubmenu ? "submenu" : "main");
  };

  return (
    <>
      <header className={headerClass}>
        <nav className={navClass}>
          <span className={s.icon} onClick={onMenuToggle}>
            {!isMenuOpen ? <Icons.IconBurger /> : <Icons.IconClose />}
          </span>
          <span className={s.logo} onClick={onHomeNavigate}>
            MGIC
          </span>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ damping: 20, duration: 0.4 }}
            className={s.drawer}
          >
            <div className={s.drawer_container}>
              {isMainInView && (
                <ul className={s.main_menu}>
                  {MenuStructure.map((el) => {
                    const className = `${s.main_title} + ${
                      !el.complex ? s.clickable : ""
                    } + ${
                      el.section === menu.section && !el.complex ? s.active : ""
                    }`;

                    return (
                      <li key={el.section} className={s.main_menu_item}>
                        <div className={s.main_title_wrap}>
                          <span
                            className={className}
                            id={el.section}
                            onClick={() =>
                              onSectionSelect(el.section, el.complex)
                            }
                          >
                            {el.section}
                          </span>
                        </div>

                        {el.complex &&
                          el.subsections.map((sub) => {
                            const subClassName = `${s.subtitle} + ${
                              s.clickable
                            } + ${
                              sub.name === menu.subsection && !isMobile
                                ? s.active
                                : ""
                            }`;
                            return (
                              <div className={s.subtitle_wrap} key={sub.name}>
                                <span
                                  className={subClassName}
                                  id={sub.name}
                                  onClick={() =>
                                    onSubsectionSelect(el.section, sub.name)
                                  }
                                >
                                  {sub.name}
                                </span>
                              </div>
                            );
                          })}
                      </li>
                    );
                  })}
                </ul>
              )}
              {isSubmenuInView && Boolean(subMenuContent.length) && (
                <div className={s.submenu}>
                  <div className={s.submenu_head}>
                    {isMobile && (
                      <span
                        className={s.back_icon}
                        onClick={() => setMobileView("main")}
                      >
                        <Icons.IconArrowRight
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </span>
                    )}
                    <span>{menu.subsection || menu.section}</span>
                  </div>

                  <ul className={s.submenu_list}>
                    {subMenuContent.map((sec) => {
                      const className = `${s.submenu_list_item} + ${
                        s.clickable
                      } + ${
                        menu.slide === sec.name && !isMobile ? s.active : ""
                      }`;
                      return (
                        <li
                          className={className}
                          key={sec.name}
                          onClick={() => onSlideSelect(sec.name)}
                        >
                          {sec.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {isSlideInView && (
                <div className={s.slide}>
                  {isMobile && (
                    <span
                      className={s.back_icon}
                      onClick={() =>
                        onSlideClose(Boolean(sectionContent.slides.length))
                      }
                    >
                      <Icons.IconArrowRight
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </span>
                  )}
                  <div className={s.slide_content}>
                    <div className={s.slide_image}>
                      <Image
                        className={s.image}
                        fill
                        alt={slideContent.name}
                        src={slideContent.content?.image || ""}
                      />
                    </div>

                    <h2 className={s.title}>{slideContent.name}</h2>
                    <p className={s.text}>{slideContent.content?.text || ""}</p>
                    <div className={s.btn_container}>
                      <Button>Learn more</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandableHeader;
