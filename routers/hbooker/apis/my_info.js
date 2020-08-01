const get = require("../mixin/http").getHbooker;

let my_info = async function () {
  let res = await get({
    url: "/reader/get_my_info",
    para: {
      reader_id: allTokens.hbooker?allTokens.hbooker.reader_id:undefined,
    },
  });
  return res;
};

module.exports = my_info;
