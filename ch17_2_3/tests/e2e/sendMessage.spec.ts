import { test, expect } from '@playwright/test';

test('选中联系人发消息', async ({ page }) => {
  // 1. 用户打开应用，切换到联系人视图
  await page.goto('http://localhost:5173/');
  const nav = page.locator('nav');
  const linkToContactView = nav.getByAltText('联系人');
  await linkToContactView.click();

  // 2. 用户选中第二个联系人，点击联系人详情中的“发消息”按钮
  const contactList = page.getByTestId('contactList');
  await expect(contactList.getByRole('listitem')).toHaveCount(6);
  await contactList.getByRole('listitem').nth(1).click();
  await page.getByTestId('jumpToThreadsButton').click();

  // 3. 应用自动切换回聊天视图并选中联系人的对话后，用户查看消息
  expect(page.url()).toContain('/chat');
  const threadList = page.getByTestId('threadList');
  await expect(threadList.getByRole('listitem').nth(1)).toHaveAttribute(
    'aria-selected',
    'true'
  );
  const messageList = page.getByTestId('messageList');
  await expect(messageList.getByRole('listitem')).toHaveCount(5);

  // 4. 用户输入新消息并发送
  const messageInput = page.getByPlaceholder('请输入消息…');
  const messageButton = page.getByTestId('sendMessageButton');
  await messageInput.fill('测试消息-1');
  await messageButton.click();
  await expect(messageList.getByRole('listitem').last()).toContainText(
    '测试消息-1'
  );
});
