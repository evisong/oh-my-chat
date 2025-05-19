import { css } from "@linaria/core";

const threadTopMenuStyles = css`
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

const ThreadTopMenu = () => (
  <header className={threadTopMenuStyles}>
    <form>
      <input maxLength={20} />
      <input type="submit" value="搜索对话" />
    </form>
    <button>新建对话</button>
  </header>
);

export default ThreadTopMenu;
