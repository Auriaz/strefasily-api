module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '03228b9a68eff50752466ee0c0bf5b6b'),
  },
});
