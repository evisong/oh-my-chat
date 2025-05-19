const threads = [
  {
    id: 1,
    contactId: 1,
    updateTime: '2023-11-04',
    latestMessage: '书的主题是现代React Web应用的设计开发实践。',
  },
  {
    id: 2,
    contactId: 2,
    updateTime: '2023-11-03',
    latestMessage: '有的，就叫《我聊》。',
  },
  {
    id: 3,
    contactId: 3,
    updateTime: '2023-11-02',
    latestMessage: '现代React Web应用设计开发实践',
  },
];

export default [
  {
    pattern: '/api/threads',
    method: 'GET',
    handle: (req, res) => {
      const data = { threads };
      res.setHeader('Content-Type', 'application/json');
      // res.end(JSON.stringify(mockMessages));
      setTimeout(() => {
        res.end(JSON.stringify(data));
      }, 1000);
    },
  },
];
