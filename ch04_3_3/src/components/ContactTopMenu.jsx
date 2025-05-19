const ContactTopMenu = () => (
  <header className="contact-top-menu">
    <form>
      <input maxLength={20} />
      <input type="submit" value="搜索联系人" />
    </form>
    <button>添加联系人</button>
  </header>
);

export default ContactTopMenu;
