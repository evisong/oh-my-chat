import { test, expect } from '@playwright/test';

test('选中联系人发消息', async ({ page }) => {
  // 1. 用户打开应用，切换到联系人视图
  await page.goto('http://localhost:5173/');
  const nav = page.locator('nav');
  const linkToContactView = nav.getByAltText('联系人');
  await linkToContactView.click();

  // 2. 用户选中第二个联系人，点击联系人详情中的“发消息”按钮
  const contactList = page.locator('aside');
  await expect(contactList.locator('li')).toHaveCount(6);
  await contactList.locator('li').nth(1).click();
  const contactDetail = page.locator('main');
  await contactDetail.getByText('发消息').click();

  // 3. 应用自动切回聊天视图并选中联系人的对话后，用户查看消息
  expect(page.url()).toContain('/chat');
  const threadList = page.locator('aside');
  await expect(threadList.locator('li').nth(1)).toHaveCSS(
    'background-color',
    'rgba(255, 255, 255, 0.6)'
  );
  const messageList = page.locator('main');
  await expect(messageList.locator('li')).toHaveCount(8);

  // 4. 用户输入新消息并发送
  const messageInput = messageList.locator('textarea');
  const messageButton = messageList.locator('input', { hasText: '发送' });
  const currentMessageCount = await messageList.locator('li').count();
  await messageInput.fill('测试消息-1');
  await messageButton.click();
  await expect(
    messageList.locator('li').nth(currentMessageCount)
  ).toContainText('测试消息-1');
});
