import User from '../../users/user.entity';

const mockedUser: User = {
  id: 1,
  email: 'user@email.com',
  name: 'John',
  password: 'hash',
  stripeCustomerId: 'stripe_customer_id',
  phoneNumber: '+48123123123',
  address: {
    id: 1,
    street: 'streetName',
    city: 'cityName',
    country: 'countryName'
  },
  isTwoFactorAuthenticationEnabled: false,
  isEmailConfirmed: false,
  isPhoneNumberConfirmed: false,
  isRegisteredWithGoogle: false,
}

export default mockedUser;