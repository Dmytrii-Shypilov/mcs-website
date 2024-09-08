import s from './page.module.scss'

const Contact: React.FC = () => {
  return (
    <main className={s.main} style={{height: '100vh'}}>
      <div>

      </div>
      <h1>We will be glad hearing from you</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.031001803184!2d55.25886198912654!3d25.185947343595284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0d69e8d93%3A0x8f0fe5aa20493ae4!2sThe%20Prism!5e1!3m2!1sen!2sua!4v1725656691883!5m2!1sen!2sua"
        width="90%"
        height="450"
        allowFullScreen
        loading="lazy"
        style={{border: 'none', margin: '0 auto'}}
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </main>
  );
};

export default Contact;
