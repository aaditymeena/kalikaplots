import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="footer-component"
        style={{
          boxSizing: "border-box",
          WebkitFontSmoothing: "antialiased",
          display: "block",
          backgroundPosition: "50% center",
          color: "#f4f4f4",
          backgroundImage:
            'url("https://assets-global.website-files.com/65d96d247cdbea321b6baac5/65e0dfb1e39dc0acf1543286_footer-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="padding-global"
          style={{
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <div
            className="container-large"
            style={{
              boxSizing: "border-box",
              WebkitFontSmoothing: "antialiased",
              width: "100%",
              maxWidth: "80rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              className="padding-vertical padding-xxlarge"
              style={{
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                padding: "5rem",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <div
                className="footer-newsletter-wrapper"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "5rem",
                  display: "flex",
                }}
              >
                <div
                  className="footer-newsletter-text-wrapper"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  <div
                    className="text-weight-semibold text-size-medium text-color-white"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "1.125rem",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    Join our newsletter
                  </div>
                  <p
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="footer-form-block w-form"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px 0px 15px",
                    minWidth: "25rem",
                    maxWidth: "35rem",
                    marginBottom: "0px",
                  }}
                >
                  <form
                    id="email-form"
                    className="footer-form"
                    name="email-form"
                    aria-label="Email Form"
                    method="get"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      gap: "16px",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "1fr max-content",
                      gridAutoColumns: "1fr",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                      display: "grid",
                    }}
                  >
                    <input
                      id="email-2"
                      className="form-input is-footer w-input"
                      name="email-2"
                      type="email"
                      maxLength="256"
                      required
                      placeholder="Enter your email"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        font: "inherit",
                        margin: "0px",
                        verticalAlign: "middle",
                        width: "100%",
                        fontSize: "14px",
                        lineHeight: 1.42857,
                        display: "block",
                        border: "1px solid rgb(245, 245, 245)",
                        padding: "0.5rem 1rem",
                        color: "#484d49",
                        minHeight: "3rem",
                        borderColor: "rgb(252, 253, 253)",
                        borderRadius: "2rem",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        height: "100%",
                        marginBottom: "0px",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        backgroundPosition: "97% center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "20px",
                        cursor: "auto",
                        backgroundImage:
                          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmZkZTQxOS00ZGRkLWU5NDYtOWQ2MC05OGExNGJiMTA3N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyNDkwMkRDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyNDkwMkNDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTE1NDItMmIzOC1kZjRkLTk0N2UtN2NjOTlmMjQ5ZGFjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJiZmRlNDE5LTRkZGQtZTk0Ni05ZDYwLTk4YTE0YmIxMDc3ZiIv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")',
                      }}
                    />
                    <input
                      id="w-node-be650e86-41d6-4d1e-5d77-05e91e73c4cc-a24572e3"
                      className="button is-footer w-button"
                      type="submit"
                      defaultValue="Submit"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        font: "inherit",
                        margin: "0px",
                        border: "0px",
                        lineHeight: "inherit",
                        cursor: "pointer",
                        display: "inline-block",
                        borderStyle: "none",
                        borderWidth: "1px",
                        borderRadius: "2rem",
                        padding: "1rem 1.5rem",
                        textDecoration: "none",
                        transition: "color 0.35s, background-color 0.35s",
                        backgroundColor: "#078939",
                        color: "white",
                        textAlign: "center",
                        appearance: "button",
                        fontSize: "1.125rem",
                      }}
                    />
                  </form>
                  <div
                    className="text-size-tiny"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "0.75rem",
                    }}
                  >
                    By subscribing you agree to with our{" "}
                    <a
                      href="https://airestates.webflow.io/utility-pages/privacy-policy"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        color: "#181f1a",
                      }}
                    >
                      <span
                        className="text-color-white"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          color: "white",
                        }}
                      >
                        Privacy Policy
                      </span>
                    </a>{" "}
                  </div>
                  <div
                    className="success-message w-form-done"
                    aria-label="Email Form success"
                    role="region"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "center",
                      display: "none",
                      padding: "1.5rem",
                      backgroundColor: "rgb(247, 252, 249)",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div
                    className="error-message w-form-fail"
                    aria-label="Email Form failure"
                    role="region"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      backgroundColor: "rgb(255, 222, 222)",
                      display: "none",
                      padding: "0.875rem 1rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="padding-bottom padding-xxlarge"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  padding: "5rem",
                  paddingTop: "0px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <div
                  className="w-layout-grid footer-top-wrapper"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    gridAutoColumns: "1fr",
                    display: "grid",
                    gap: "1rem 2rem",
                    gridTemplateRows: "auto",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                    alignItems: "start",
                  }}
                >
                  <a
                    id="w-node-_88aa80ca-5686-24ac-d624-11e9a2457300-a24572e3"
                    className="footer-logo-link w-nav-brand w--current"
                    aria-current="page"
                    href="https://airestates.webflow.io/"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderColor: "#181f1a",
                      textDecoration: "none",
                      cssFloat: "left",
                      color: "rgb(51, 51, 51)",
                      position: "relative",
                      paddingLeft: "0px",
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0e5a67005511963af3a69_logo.svg"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        display: "inline-block",
                      }}
                    />
                  </a>
                  <div
                    className="footer-link-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      placeItems: "flex-start start",
                      flexDirection: "column",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "100%",
                      gridAutoColumns: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="margin-bottom margin-xsmall"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <div
                        className="text-weight-semibold"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 600,
                        }}
                      >
                        Page
                      </div>
                    </div>
                    <a
                      className="footer-link w--current"
                      aria-current="page"
                      href="https://airestates.webflow.io/"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Home V1
                    </a>
                    <link
                      href="/"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/home-v2"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Home V2
                    </a>
                    <link
                      href="/home-v2"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/properties"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Properties
                    </a>
                    <link
                      href="/properties"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/properties/8-732-sqft-lot-oxford-in-uk-4"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Properties Single
                    </a>
                    <link
                      href="/properties/8-732-sqft-lot-oxford-in-uk-4"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/new-listing"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      New Listing
                    </a>
                    <link
                      href="/new-listing"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                  <div
                    className="footer-link-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      placeItems: "flex-start start",
                      flexDirection: "column",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "100%",
                      gridAutoColumns: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="margin-bottom margin-xsmall"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <div
                        className="text-weight-semibold"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 600,
                        }}
                      >
                        Page
                      </div>
                    </div>
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/price-reduced"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Price Reduced
                    </a>
                    <link
                      href="/price-reduced"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/land"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Land
                    </a>
                    <link
                      href="/land"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/construction"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Construction
                    </a>
                    <link
                      href="/construction"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/shared-ownership"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Shared ownership
                    </a>
                    <link
                      href="/shared-ownership"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/rent"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Rent
                    </a>
                    <link
                      href="/rent"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                  <div
                    className="footer-link-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      placeItems: "flex-start start",
                      flexDirection: "column",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "100%",
                      gridAutoColumns: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="margin-bottom margin-xsmall"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <div
                        className="text-weight-semibold"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 600,
                        }}
                      >
                        Page
                      </div>
                    </div>
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/sell"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Sell
                    </a>
                    <link
                      href="/sell"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/about"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      About US
                    </a>
                    <link
                      href="/about"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/team/guy-hawkins"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Agent (CMS)
                    </a>
                    <link
                      href="/team/guy-hawkins"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/blog"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Blog
                    </a>
                    <link
                      href="/blog"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/post/neighborhood-spotlight-airestates-through-the-ages"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Blog Post
                    </a>
                    <link
                      href="/post/neighborhood-spotlight-airestates-through-the-ages"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                  <div
                    className="footer-link-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      placeItems: "flex-start start",
                      flexDirection: "column",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "100%",
                      gridAutoColumns: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="margin-bottom margin-xsmall"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <div
                        className="text-weight-semibold"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 600,
                        }}
                      >
                        Page
                      </div>
                    </div>
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/product"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Product/Shop
                    </a>
                    <link
                      href="/product"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/contact"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Contact Us
                    </a>
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/sign-in"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Sign In
                    </a>
                    <link
                      href="/sign-in"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/sign-up"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Sign Up
                    </a>
                    <link
                      href="/sign-up"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/demo"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Demo
                    </a>
                    <link
                      href="/utility-pages/demo"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                  <div
                    className="footer-link-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      placeItems: "flex-start start",
                      flexDirection: "column",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "100%",
                      gridAutoColumns: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="margin-bottom margin-xsmall"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <div
                        className="text-weight-semibold"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          fontWeight: 600,
                        }}
                      >
                        Page
                      </div>
                    </div>
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/instructions"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Instructions
                    </a>
                    <link
                      href="/utility-pages/instructions"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/404"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      404 Not Found
                    </a>
                    <link
                      href="/404"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/401"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Protected Password
                    </a>
                    <link
                      href="/401"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/changelog"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Changelog
                    </a>
                    <link
                      href="/utility-pages/changelog"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/terms-conditions"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Terms & Condition
                    </a>
                    <link
                      href="/utility-pages/terms-conditions"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/privacy-policy"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Privacy Policy
                    </a>
                    <link
                      href="/utility-pages/privacy-policy"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-link"
                      href="https://airestates.webflow.io/utility-pages/licenses"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                        color: "#f4f4f4",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Licenses
                    </a>
                    <link
                      href="/utility-pages/licenses"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="line-divider"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  backgroundColor: "rgb(252, 253, 253)",
                  width: "100%",
                  height: "1px",
                }}
              />
              <div
                className="padding-top padding-medium"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  padding: "2rem",
                  paddingBottom: "0px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <div
                  className="footer-bottom-wrapper"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="w-layout-grid footer-legal-list"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      gap: "0rem 1.5rem",
                      whiteSpace: "normal",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "max-content",
                      gridAutoColumns: "max-content",
                      gridAutoFlow: "column",
                      justifyContent: "center",
                      display: "grid",
                    }}
                  >
                    <div
                      id="w-node-_88aa80ca-5686-24ac-d624-11e9a245734c-a24572e3"
                      className="footer-credit-text"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        fontSize: "0.875rem",
                      }}
                    >
                      © 2024 Created by{" "}
                      <a
                        className="footer-link"
                        href="https://airdokan.com/"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderColor: "#181f1a",
                          textDecoration: "none",
                          transition: "color 0.3s ease-in-out",
                          color: "#f4f4f4",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        AirDokan
                      </a>
                      <link
                        href="https://airdokan.com/"
                        rel="prefetch"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      />{" "}
                      & Powered by{" "}
                      <a
                        className="footer-link"
                        href="https://webflow.com/"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderColor: "#181f1a",
                          textDecoration: "none",
                          transition: "color 0.3s ease-in-out",
                          color: "#f4f4f4",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        Webflow
                      </a>
                      .
                    </div>
                    <a
                      className="footer-legal-link"
                      href="https://airestates.webflow.io/utility-pages/privacy-policy"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "underline",
                        color: "#f4f4f4",
                        fontSize: "0.875rem",
                      }}
                    >
                      Privacy Policy
                    </a>
                    <link
                      href="/utility-pages/privacy-policy"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-legal-link"
                      href="https://airestates.webflow.io/utility-pages/terms-conditions"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "underline",
                        color: "#f4f4f4",
                        fontSize: "0.875rem",
                      }}
                    >
                      Terms of Service
                    </a>
                    <link
                      href="/utility-pages/terms-conditions"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <a
                      className="footer-legal-link"
                      href="https://airestates.webflow.io/utility-pages/cookies-settings"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        textDecoration: "underline",
                        color: "#f4f4f4",
                        fontSize: "0.875rem",
                      }}
                    >
                      Cookies Settings
                    </a>
                    <link
                      href="/utility-pages/cookies-settings"
                      rel="prefetch"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                  </div>
                  <div
                    className="w-layout-grid footer-social-icons"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      gap: "0rem 0.75rem",
                      whiteSpace: "normal",
                      placeItems: "start",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "max-content",
                      gridAutoColumns: "max-content",
                      gridAutoFlow: "column",
                      display: "grid",
                    }}
                  >
                    <a
                      className="footer-social-link w-inline-block"
                      href="https://www.facebook.com/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        maxWidth: "100%",
                        textDecoration: "none",
                        color: "#f4f4f4",
                        alignItems: "center",
                        fontSize: "14px",
                        display: "flex",
                      }}
                    >
                      <div
                        className="icon-embed-xsmall w-embed"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "1.5rem",
                          height: "1.5rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          height="100%"
                          width="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                            fill="CurrentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="footer-social-link w-inline-block"
                      href="https://www.instagram.com/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        maxWidth: "100%",
                        textDecoration: "none",
                        color: "#f4f4f4",
                        alignItems: "center",
                        fontSize: "14px",
                        display: "flex",
                      }}
                    >
                      <div
                        className="icon-embed-xsmall w-embed"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "1.5rem",
                          height: "1.5rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          height="100%"
                          width="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            clipRule="evenodd"
                            d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                            fill="CurrentColor"
                            fillRule="evenodd"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="footer-social-link w-inline-block"
                      href="https://twitter.com/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        maxWidth: "100%",
                        textDecoration: "none",
                        color: "#f4f4f4",
                        alignItems: "center",
                        fontSize: "14px",
                        display: "flex",
                      }}
                    >
                      <div
                        className="icon-embed-xsmall w-embed"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "1.5rem",
                          height: "1.5rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          height="100%"
                          width="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                            fill="CurrentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="footer-social-link w-inline-block"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        maxWidth: "100%",
                        textDecoration: "none",
                        color: "#f4f4f4",
                        alignItems: "center",
                        fontSize: "14px",
                        display: "flex",
                      }}
                    >
                      <div
                        className="icon-embed-xsmall w-embed"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "1.5rem",
                          height: "1.5rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          height="100%"
                          width="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            clipRule="evenodd"
                            d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                            fill="CurrentColor"
                            fillRule="evenodd"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="footer-social-link w-inline-block"
                      href="https://www.youtube.com/"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#181f1a",
                        maxWidth: "100%",
                        textDecoration: "none",
                        color: "#f4f4f4",
                        alignItems: "center",
                        fontSize: "14px",
                        display: "flex",
                      }}
                    >
                      <div
                        className="icon-embed-xsmall w-embed"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "1.5rem",
                          height: "1.5rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          height="100%"
                          width="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            clipRule="evenodd"
                            d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                            fill="CurrentColor"
                            fillRule="evenodd"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </>
  );
}
