import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '../Dropdown.jsx';

describe('Dropdown', () => {
  test('渲染下拉按钮', () => {
    render(<Dropdown menuItems={[]}>吃水果</Dropdown>);
    expect(screen.getByText('吃水果')).toBeInTheDocument();
  });

  test('点击按钮打开下拉菜单', async () => {
    const menuItems = [{ label: '苹果' }, { label: '香蕉' }];
    const { getByText, findAllByRole } = render(
      <Dropdown menuItems={menuItems}>吃水果</Dropdown>
    );
    fireEvent.click(getByText('吃水果'));
    const menuOptions = await findAllByRole('listitem');
    expect(menuOptions).toHaveLength(2);
    expect(menuOptions[0]).toHaveTextContent('苹果');
    expect(menuOptions[1]).toHaveTextContent('香蕉');
  });

  test('点击下拉菜单项目将调用onClick并关闭下拉菜单', async () => {
    const onClick = jest.fn();
    const { getByText, findByText, queryAllByRole } = render(
      <Dropdown menuItems={[{ label: '苹果', onClick }]}>吃水果</Dropdown>
    );
    fireEvent.click(getByText('吃水果'));
    const menuOption = await findByText('苹果');
    fireEvent.click(menuOption);
    expect(onClick).toHaveBeenCalled();
    expect(queryAllByRole('listitem')).toHaveLength(0);
  });

  test('点击外部关闭下拉菜单', async () => {
    document.body.innerHTML = '<div>吃蔬菜</div><div id="root"></div>';
    const { getByText, findAllByRole, queryAllByRole } = render(
      <Dropdown menuItems={[{ label: '苹果' }]}>吃水果</Dropdown>,
      {
        container: document.getElementById('root'),
      }
    );
    fireEvent.click(getByText('吃水果'));
    await findAllByRole('listitem');
    fireEvent.mouseDown(screen.getByText('吃蔬菜'));
    expect(queryAllByRole('listitem')).toHaveLength(0);
  });
});
