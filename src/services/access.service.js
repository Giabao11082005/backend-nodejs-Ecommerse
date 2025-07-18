const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");

const RoleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async () => {
    try {
      //step 1: check email exists ?
      const holderShop = await shopModel.findOne({ email }).lean();
      //if exists
      if (!holderShop) {
        return {
          code: "xxxx",
          message: "Shop already registered!",
        };
      }
      //no exists
      const passwordHash = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });

      if (newShop) {
        //created privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulesLength: 4096,
        });

        console.log(privateKey, publicKey); //save connection key store
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}
