(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [247],
  {
    9250: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return F;
        },
      });
      var d = c(5893),
        e = c(9008),
        f = c.n(e),
        g = c(8826),
        h = c.n(g),
        i = c(1664),
        j = c.n(i),
        k = c(7568),
        l = c(4051),
        m = c.n(l),
        n = c(7294),
        o = c(4032),
        p = c.n(o),
        q = c(1345),
        r = c(950);
      new r._k({ supportedChainIds: [1, 3, 4, 5, 42] });
      var s = c(1967),
        t = new s.zw({ supportedChainIds: [1, 3, 4, 5, 42] }),
        u = c(1163),
        v = c.n(u);
      c(9669), c(129);
      var w = c(9473),
        x = c(7867),
        y = c(5486),
        z = c(7918),
        A = c.n(z),
        B = c(1645),
        C = function (a) {
          var b = function (a) {
              G((0, x.Cs)(!0)), G((0, x.oo)(!1));
              var b = J(a),
                c = N.getHexProof(b);
              o.methods
                .validateBrcAddress(l.utils.toHex(b), c)
                .call()
                .then(function (a) {
                  G((0, x.oo)(a)), G((0, x.Cs)(!1));
                });
            },
            e = function () {
              void 0 !== window.unisat
                ? window.unisat.requestAccounts().then(function (a) {
                    a[0] &&
                      (v().push("/sate-holders"),
                      W(a[0]),
                      localStorage.setItem("brcDisconnect", !1),
                      localStorage.setItem("ercDisconnect", !1));
                  })
                : alert("UniSat Wallet has not been installed!");
            },
            f = function () {
              u(!s);
            },
            g = function (a) {
              setProFileToggle(a);
            },
            h = (0, q.Ge)(),
            i = (h.active, h.account, h.library, h.connector, h.activate);
          h.deactivate;
          var l = new (A())(A().givenProvider),
            o = new l.eth.Contract(
              y,
              "0xB31B9CE29F3f6E7C45804937C6141bD6dA369Bdc"
            ),
            r = (0, n.useState)(!1),
            s = r[0],
            u = r[1],
            z = (0, n.useState)("/"),
            C = z[0],
            D = z[1],
            E = (0, w.oR)(),
            F = (0, w.v9)(function (a) {
              return a;
            }),
            G = (0, w.I0)();
          (0, n.useEffect)(
            function () {
              D(v().route),
                void 0 === window.unisat ||
                  JSON.parse(localStorage.getItem("brcDisconnect")) ||
                  (window.unisat.getAccounts().then(function (a) {
                    a[0] &&
                      (W(a[0]),
                      window &&
                        window.ethereum &&
                        window.ethereum.selectedAddress &&
                        !E.getState().user.ercUserInfo &&
                        !JSON.parse(localStorage.getItem("ercDisconnect")) &&
                        Y(window.ethereum.selectedAddress),
                      localStorage.setItem("brcDisconnect", !1),
                      localStorage.setItem("ercDisconnect", !1));
                  }),
                  unisat.on("accountsChanged", function (a) {
                    0 == a.length
                      ? (G((0, x.u8)(null)),
                        localStorage.setItem("brcDisconnect", !1),
                        localStorage.setItem("ercDisconnect", !1))
                      : (W(a[0]),
                        localStorage.setItem("brcDisconnect", !1),
                        localStorage.setItem("ercDisconnect", !1));
                  })),
                window &&
                  window.ethereum &&
                  !JSON.parse(localStorage.getItem("ercDisconnect")) &&
                  window.ethereum.on("accountsChanged", function (a) {
                    0 == a.length
                      ? (G((0, x.Jj)(null)),
                        localStorage.setItem("ercDisconnect", !1))
                      : (W(E.getState().user.brcUserInfo),
                        Y(a[0]),
                        localStorage.setItem("ercDisconnect", !1));
                  }),
                window &&
                  window.ethereum &&
                  G((0, x.ks)(window.ethereum.networkVersion));
            },
            [v().events]
          );
          var H = (0, n.useState)(B),
            I = H[0];
          H[1];
          var J = c(4648),
            K = I.map(function (a) {
              return J(a);
            }),
            L = c(2162).MerkleTree;
          c(6614).YW, c(5982).default;
          var M,
            N = new L(K, J, { sortPairs: !0 });
          N.getRoot().toString("hex");
          var O,
            P =
              ((M = (0, k.Z)(
                m().mark(function a() {
                  return m().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          G((0, x.nQ)({ state: !0, msg: "Loading..." }));
                        case 1:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )),
              function () {
                return M.apply(this, arguments);
              });
          (0, k.Z)(
            m().mark(function a() {
              return m().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (a.next = 2), P();
                    case 2:
                      return (a.next = 4), g(!0);
                    case 4:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          );
          var Q = function (a, b) {
              if (!E.getState().user.brcUserInfo) {
                G(
                  (0, x.q1)({
                    type: "warning",
                    msg: "Please link BRC wallet first",
                  })
                );
                return;
              }
              window.ethereum
                ? l.eth.net.getId().then(function (c) {
                    c == E.getState().user.networkPrd
                      ? (S(a, b), G((0, x.ks)(c)))
                      : R(E.getState().user.networkPrd, a, b);
                  })
                : G(
                    (0, x.q1)({
                      type: "warning",
                      msg: "Your browser does not support connected wallets",
                    })
                  );
            },
            R = function (a, b, c) {
              window.ethereum
                .request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: A().utils.numberToHex(a) }],
                })
                .then(function (a) {
                  Q(b, c);
                })
                .catch(function (a) {});
            };
          function S(a, b) {
            return T.apply(this, arguments);
          }
          function T() {
            return (T = (0, k.Z)(
              m().mark(function a(b, c) {
                var d;
                return m().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (E.getState().user.brcUserInfo) {
                            a.next = 3;
                            break;
                          }
                          return (
                            G(
                              (0, x.q1)({
                                type: "warning",
                                msg: "Please link Erc wallet first",
                              })
                            ),
                            a.abrupt("return")
                          );
                        case 3:
                          if (
                            (b.stopPropagation(),
                            localStorage.setItem("ercDisconnect", !1),
                            !(
                              window &&
                              window.ethereum &&
                              window.ethereum.selectedAddress &&
                              !E.getState().user.ercUserInfo &&
                              !JSON.parse(localStorage.getItem("ercDisconnect"))
                            ))
                          ) {
                            a.next = 8;
                            break;
                          }
                          return (
                            Y(window.ethereum.selectedAddress),
                            a.abrupt("return")
                          );
                        case 8:
                          if (((a.prev = 8), "MetaMask" != c)) {
                            a.next = 17;
                            break;
                          }
                          return (
                            (a.next = 12),
                            ethereum.request({ method: "eth_requestAccounts" })
                          );
                        case 12:
                          Y((d = a.sent)[0]),
                            localStorage.setItem("ercDisconnect", !1),
                            (a.next = 19);
                          break;
                        case 17:
                          return (a.next = 19), i(t);
                        case 19:
                          a.next = 24;
                          break;
                        case 21:
                          (a.prev = 21), (a.t0 = a.catch(8)), console.log(a.t0);
                        case 24:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[8, 21]]
                );
              })
            )).apply(this, arguments);
          }
          function U(a) {
            return V.apply(this, arguments);
          }
          function V() {
            return (V = (0, k.Z)(
              m().mark(function a(b) {
                return m().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        "brc" == b
                          ? (G((0, x.u8)(null)),
                            localStorage.setItem("brcDisconnect", !0),
                            G((0, x.Jj)(null)),
                            localStorage.setItem("ercDisconnect", !0))
                          : "erc" == b &&
                            (G((0, x.Jj)(null)),
                            localStorage.setItem("ercDisconnect", !0));
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function W(a) {
            return X.apply(this, arguments);
          }
          function X() {
            return (X = (0, k.Z)(
              m().mark(function a(c) {
                return m().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        E.getState().user.network ==
                          E.getState().user.networkPrd &&
                          (G((0, x.VN)(!0)),
                          b(c),
                          o.methods
                            .hasBrcGet(c)
                            .call()
                            .then(function (a) {
                              G((0, x.VN)(!1)), G((0, x.wm)(a));
                            })),
                          G((0, x.u8)(c));
                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function Y(a) {
            return Z.apply(this, arguments);
          }
          function Z() {
            return (Z = (0, k.Z)(
              m().mark(function a(b) {
                return m().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        E.getState().user.network ==
                          E.getState().user.networkPrd &&
                          (G((0, x.VN)(!0)),
                          o.methods
                            .hasErcGet(b)
                            .call()
                            .then(function (a) {
                              G((0, x.VN)(!1)), G((0, x.O9)(a));
                            })),
                          G((0, x.Jj)(b));
                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)("div", {
              className: "box",
              children: [
                (0, d.jsxs)("div", {
                  className: "".concat(p().title, " title"),
                  children: [
                    (0, d.jsx)("div", {
                      className: p().logo,
                      children: (0, d.jsx)("img", { src: "/images/logo.png" }),
                    }),
                    (0, d.jsxs)("div", {
                      className: p().btns,
                      children: [
                        (0, d.jsx)("button", {
                          className: "btn icon_btn",
                          children: (0, d.jsx)("img", {
                            src: "/images/twitter.png",
                          }),
                        }),
                        F.user.brcUserInfo
                          ? (0, d.jsxs)("button", {
                              className: "btn green disconnect",
                              onClick: function (a) {
                                return U("brc");
                              },
                              children: [
                                (0, d.jsx)("i", {
                                  className: "iconfont icon-btc",
                                }),
                                (0, d.jsx)("i", {
                                  className: "iconfont icon-duankai",
                                }),
                                ""
                                  .concat(
                                    F.user.brcUserInfo.slice(0, 4),
                                    "...."
                                  )
                                  .concat(
                                    F.user.brcUserInfo.slice(
                                      F.user.brcUserInfo.length - 4,
                                      F.user.brcUserInfo.length
                                    )
                                  ),
                              ],
                            })
                          : (0, d.jsx)("button", {
                              className: "btn",
                              onClick: e,
                              children: "Connect BRC",
                            }),
                        F.user.ercUserInfo
                          ? (0, d.jsxs)("button", {
                              className: "btn green disconnect",
                              onClick: function (a) {
                                return U("erc");
                              },
                              children: [
                                (0, d.jsx)("i", {
                                  className: "iconfont icon-ETH1",
                                }),
                                (0, d.jsx)("i", {
                                  className: "iconfont icon-duankai",
                                }),
                                ""
                                  .concat(
                                    F.user.ercUserInfo.slice(0, 4),
                                    "...."
                                  )
                                  .concat(
                                    F.user.ercUserInfo.slice(
                                      F.user.ercUserInfo.length - 4,
                                      F.user.ercUserInfo.length
                                    )
                                  ),
                              ],
                            })
                          : (0, d.jsx)("button", {
                              className: "btn",
                              onClick: function (a) {
                                return Q(a, "MetaMask");
                              },
                              children: "Connect BSC",
                            }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className: p().nav,
                      children: (0, d.jsxs)("ul", {
                        children: [
                          (0, d.jsx)("li", {
                            className: "".concat("/" == C ? p().selected : ""),
                            children: (0, d.jsx)(j(), {
                              href: "/",
                              children: "Home",
                            }),
                          }),
                          (0, d.jsx)("li", {
                            className: "".concat(
                              "/sate-holders" == C ? p().selected : ""
                            ),
                            children: (0, d.jsx)(j(), {
                              href: "/sate-holders",
                              children: "Sats Holders",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, d.jsx)("div", {
                      className:
                        "mask animate__animated animate__fadeIn animate__faster ".concat(
                          s ? "show" : ""
                        ),
                      onClick: f,
                      children: (0, d.jsxs)("div", {
                        className: p().wallet_list,
                        children: [
                          (0, d.jsx)("p", {
                            className: p().title,
                            children: (0, d.jsx)("strong", {
                              children: "Sign Up / Log In",
                            }),
                          }),
                          (0, d.jsxs)("ul", {
                            children: [
                              (0, d.jsxs)("li", {
                                onClick: function (a) {
                                  return S(a, "MetaMask");
                                },
                                children: [
                                  (0, d.jsx)("img", {
                                    src: "/images/icn-metamask.svg",
                                  }),
                                  "Meta Mask",
                                ],
                              }),
                              (0, d.jsxs)("li", {
                                onClick: function (a) {
                                  return S(a, "WalletConnect");
                                },
                                children: [
                                  (0, d.jsxs)("svg", {
                                    "aria-labelledby": "wallet-connect-logo",
                                    fill: "none",
                                    height: "100%",
                                    viewBox: "0 0 164 100",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, d.jsx)("title", {
                                        id: "wallet-connect-logo",
                                        children: "Wallet Connect Logo",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "M33.4018 19.5383C60.0094 -6.51275 103.149 -6.51275 129.756 19.5383L132.959 22.6735C134.289 23.9761 134.289 26.0879 132.959 27.3905L122.004 38.1157C121.339 38.7669 120.261 38.7669 119.595 38.1157L115.189 33.8011C96.6266 15.6273 66.5315 15.6273 47.9694 33.8011L43.2502 38.4216C42.585 39.0729 41.5065 39.0729 40.8413 38.4216L29.887 27.6965C28.5567 26.3939 28.5567 24.2821 29.887 22.9795L33.4018 19.5383ZM152.411 41.719L162.16 51.2645C163.49 52.567 163.49 54.6789 162.16 55.9814L118.2 99.0231C116.869 100.326 114.712 100.326 113.382 99.0231C113.382 99.0231 113.382 99.0231 113.382 99.0231L82.1815 68.4752C81.8489 68.1495 81.3096 68.1495 80.977 68.4752C80.977 68.4752 80.977 68.4752 80.977 68.4752L49.7772 99.0231C48.4469 100.326 46.2899 100.326 44.9595 99.0231C44.9595 99.0231 44.9595 99.0231 44.9595 99.0231L0.997783 55.9809C-0.332594 54.6783 -0.332594 52.5665 0.997783 51.2639L10.7471 41.7185C12.0775 40.4159 14.2345 40.4159 15.5649 41.7185L46.7658 72.2668C47.0984 72.5925 47.6376 72.5925 47.9702 72.2668C47.9702 72.2668 47.9702 72.2668 47.9702 72.2668L79.1696 41.7185C80.4999 40.4159 82.6569 40.4159 83.9873 41.7184C83.9873 41.7184 83.9873 41.7184 83.9874 41.7184L115.188 72.2668C115.521 72.5924 116.06 72.5924 116.393 72.2668L147.593 41.719C148.923 40.4165 151.08 40.4165 152.411 41.719Z",
                                        fill: "#3B99FC",
                                      }),
                                    ],
                                  }),
                                  "Wallet Connect",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: "".concat(p().slogan, " content"),
                  children:
                    "Welcome! BTC will break through the dimensional barrier. Let's join this commemorative event!",
                }),
              ],
            }),
          });
        };
      function D(a) {
        a.children, a.home;
        var b = (0, w.v9)(function (a) {
          return a;
        });
        return (0, d.jsx)(d.Fragment, {
          children: (0, d.jsx)("div", {
            className: "loading-mask animate__animated animate__fadeIn",
            children: (0, d.jsxs)("div", {
              className: "gif",
              children: [
                (0, d.jsx)("p", {
                  children: (0, d.jsx)("img", { src: "images/loading.gif" }),
                }),
                (0, d.jsx)("p", { children: b.user.loading.msg }),
              ],
            }),
          }),
        });
      }
      function E(a) {
        a.children, a.home;
        var b = (0, w.v9)(function (a) {
            return a;
          }),
          c = (0, w.I0)();
        return (
          setTimeout(function () {
            c((0, x.q1)(!1));
          }, 3e3),
          (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)("div", {
              className: "message_box animate__animated animate__fadeInDown",
              children: (0, d.jsxs)("div", {
                className: "content ".concat(b.user.message.type),
                children: [
                  "success" == b.user.message.type
                    ? (0, d.jsx)("i", { className: "iconfont icon-chenggong" })
                    : "",
                  "warning" == b.user.message.type
                    ? (0, d.jsx)("i", {
                        className: "iconfont icon-tixingshixin",
                      })
                    : "",
                  "error" == b.user.message.type
                    ? (0, d.jsx)("i", {
                        className: "iconfont icon-cuowutishitianchong",
                      })
                    : "",
                  b.user.message.msg,
                ],
              }),
            }),
          })
        );
      }
      function F(a) {
        var b = a.children;
        a.home;
        var c = (0, w.v9)(function (a) {
          return a;
        });
        return (0, d.jsxs)(d.Fragment, {
          children: [
            c.user.message ? (0, d.jsx)(E, {}) : "",
            c.user.loading ? (0, d.jsx)(D, {}) : "",
            (0, d.jsxs)("div", {
              className: h().container,
              children: [
                (0, d.jsx)(f(), {
                  children: (0, d.jsx)("link", {
                    rel: "stylesheet",
                    href: "https://at.alicdn.com/t/c/font_3624132_cqhdlyl85th.css",
                  }),
                }),
                (0, d.jsx)(C, {}),
                (0, d.jsx)("main", { children: b }),
              ],
            }),
          ],
        });
      }
      c(3795);
    },
    4032: function (a) {
      a.exports = {
        slogan: "header_slogan__AmC9c",
        title: "header_title__Q14Kw",
        logo: "header_logo__d4jIK",
        nav: "header_nav__zbhEe",
        selected: "header_selected__ij1qW",
        btns: "header_btns__aKlZB",
        address_box: "header_address_box__o861N",
        wallet_list: "header_wallet_list__HE4Ow",
      };
    },
    8826: function (a) {
      a.exports = { container: "layout_container__B_Rgx" };
    },
    6601: function () {},
    9214: function () {},
    5568: function () {},
    3472: function () {},
    4654: function () {},
    2361: function () {},
    4616: function () {},
    6567: function () {},
    5486: function (a) {
      "use strict";
      a.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"_brc","type":"string"},{"internalType":"bytes32","name":"_leaf","type":"bytes32"},{"internalType":"bytes32[]","name":"_proofs","type":"bytes32[]"}],"name":"getDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUserRecords","outputs":[{"components":[{"internalType":"string","name":"brc","type":"string"},{"internalType":"address","name":"erc","type":"address"},{"internalType":"uint256","name":"time","type":"uint256"}],"internalType":"struct Airdrop.Record[]","name":"r","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"d","type":"string"}],"name":"hasBrcGet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"hasErcGet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"money","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_leaf","type":"bytes32"},{"internalType":"bytes32[]","name":"_proofs","type":"bytes32[]"}],"name":"validateBrcAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'
      );
    },
    1645: function (a) {
      "use strict";
      a.exports = JSON.parse(
      );
    },
  },
]);