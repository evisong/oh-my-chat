import reactLogo from '../assets/react.svg';

const ContactDetail = () => (
  <>
    <div className="contact-detail">
      <img src={reactLogo} className="avatar" alt="头像" />
      <div className="contact-name">小美</div>
    </div>
    <div className="contact-actions">
      <button className="primary-button">发消息</button>
      <button className="secondary-button">修改联系人</button>
      <button className="secondary-button">删除联系人</button>
    </div>
  </>
);

export default ContactDetail;
