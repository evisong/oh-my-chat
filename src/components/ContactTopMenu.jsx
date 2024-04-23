import { css } from "@linaria/core";

const contactTopMenuStyles = css`
  flex: 0 0 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #9a9a9a;
  height: 80px;
  background-color: #cecece;

  & input,
  & button {
    height: 2rem;
  }
`;

const ContactTopMenu = () => (
  <header className={contactTopMenuStyles}>
    <form>
      <input maxLength={20} />
      <input type="submit" value="搜索联系人" />
    </form>
    <button>添加联系人</button>
  </header>
);

export default ContactTopMenu;
