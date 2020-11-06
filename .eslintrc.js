export default {
  extends: "react-app",
  globals: {
    SharedArrayBuffer: true,

    spyOnDev: true,
    spyOnDevAndProd: true,
    spyOnProd: true,
    __PROFILE__: true,
    __UMD__: true,
    __EXPERIMENTAL__: true,
    trustedTypes: true,
  },
}