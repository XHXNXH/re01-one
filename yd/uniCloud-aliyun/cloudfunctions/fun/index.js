let db = uniCloud.database({
  throwOnNotFound: false,
})
exports.main = async (event, context) => {
  if (event.api === 'publish') {
    return await db.collection('message').add({
      content: event.content,
      public: true
    })
  }

  if (event.api === 'getMessage') {
    return await db.collection('message').where({
      public: true
    }).get()
  }
  return "新消息提醒"
};