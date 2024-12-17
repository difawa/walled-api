// DTO
class UserResponse {
  constructor(user) {
    this.id = user.id
    this.username = user.username;
    this.fullname = user.fullname;
    this.email = user.email;
    this.balance = user.balance;
    this.typeofaccount = user.typeofaccount;
    this.accountnumber = user.accountnumber;
  }
}

module.exports = { UserResponse };
