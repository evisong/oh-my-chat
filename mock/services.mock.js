export default [
  {
    pattern: '/api/threads/{threadId}/messages',
    handle: (req, res) => {
      const { threadId } = req.params;
      const data = threadId % 2 === 0 ? {
        contactName: '小白',
        messages: [
          {
            id: 1,
            content: '你好React！',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-05T10:11:12',
          },
          {
            id: 2,
            content: '你好React！',
            from: '小白',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-05T10:11:36',
          },
          {
            id: 3,
            content:
              '欢迎阅读《现代React Web应用设计开发实践》，你现在看到的是本书的样例应用。',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:15:16',
          },
          {
            id: 4,
            content: '这款应用有名字吗？',
            from: '小白',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:15:50',
          },
          {
            id: 5,
            content: '有的，就叫《我聊》。',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:16:08',
          },
        ]
      } : {
        contactName: '小帅',
        messages: [
          {
            id: 1,
            content: '你好，有个关于React的问题想请教。',
            from: '小帅',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-05T10:11:12',
          },
          {
            id: 2,
            content: '你好，请问有什么问题？',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-05T10:11:36',
          },
          {
            id: 3,
            content: 'React 18版本中最基础的Hooks有哪些？',
            from: '小帅',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:15:16',
          },
          {
            id: 4,
            content: 'React 18版本中最基础的Hooks有useState、useEffect、useContext，你可以从书上了解到更多。',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:15:50',
          },
          {
            id: 5,
            content: '谢谢。这本书的名字是什么？',
            from: '小帅',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:16:08',
          },
          {
            id: 6,
            content: '书名是《现代React Web应用设计开发实践》。',
            from: 'me',
            fromAvatar: '/react.svg',
            sentTime: '2023-11-06T14:16:28',
          },
        ]
      };
      res.setHeader('Content-Type', 'application/json');
      // res.end(JSON.stringify(mockMessages));
      setTimeout(() => {
        res.end(JSON.stringify(data));
      }, 1000);
    },
  },
  {
    pattern: '/api/contacts/{contactId}',
    method: 'POST',
    handle: (req, res) => {
      const { contactId } = req.params;
      req.on('data', (chunk) => {
        const contact = JSON.parse(chunk);
        console.log('更新联系人信息', contactId, contact);
        res.setHeader('Content-Type', 'application/json');
        // res.end(JSON.stringify(contact));
        setTimeout(() => {
          res.end(JSON.stringify(contact));
        }, 1000);
      });
    },
  },
];
