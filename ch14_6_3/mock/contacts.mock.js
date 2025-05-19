export default [
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
