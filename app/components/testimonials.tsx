import React from "react";

export default function Testimonials() {
  return (
    <>
      <section
        className="section-testimonial"
        style={{
          boxSizing: "border-box",
          WebkitFontSmoothing: "antialiased",
          display: "block",
          backgroundColor: "rgb(247, 252, 249)",
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
              className="padding-section-large"
              style={{
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                paddingTop: "7rem",
                paddingBottom: "7rem",
              }}
            >
              <div
                className="margin-bottom margin-xxlarge"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "5rem",
                  marginTop: "0px",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div
                  className="section-heading-wrapper text-align-center"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    <div
                      className="margin-bottom margin-small"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        margin: "1.5rem",
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <h2
                        className="heading-style-h2"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontSize: "3rem",
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        Customer Testimonials
                      </h2>
                    </div>
                    <p
                      className="text-size-medium"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginTop: "0px",
                        marginBottom: "0px",
                        color: "#484d49",
                        fontSize: "1.125rem",
                      }}
                    >
                      Read what our clients have to say about us
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-component"
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  columnCount: 3,
                  columnGap: "2rem",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      We had an exceptional experience with this real estate
                      agency, and we highly recommend their services to others.
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      Working with this real estate agency was a game changer
                      for us. Their expertise and guidance helped us find the
                      perfect property within our budget.
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      Working with this real estate agency was a game changer
                      for us. Their expertise and guidance helped us find the
                      perfect property within our budget.
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      The professionalism and attention to detail displayed by
                      the team at this agency is unmatched. We couldn't be
                      happier with our experience.
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare."
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-content"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    border: "1px solid rgb(247, 252, 249)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    backgroundColor: "rgb(252, 253, 253)",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: "2rem",
                    display: "inline-block",
                    boxShadow:
                      "rgba(24, 31, 26, 0.06) 0px 1px 2px, rgba(24, 31, 26, 0.1) 0px 1px 3px",
                  }}
                >
                  <div
                    className="testimonial-rating-wrapper"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "1.5rem",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="testimonial-rating-icon"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgb(165, 225, 188)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "0.25rem",
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
                          width="100%"
                          fill="none"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            overflow: "hidden",
                          }}
                        >
                          <path
                            d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                            fill="currentColor"
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="margin-bottom margin-small"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      margin: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="text-size-regular"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      The team went above and beyond to provide exceptional
                      support during the buying process.
                    </div>
                  </div>
                  <div
                    className="testimonial-client"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="testimonial-client-image-wrapper"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        className="testimonial-customer-image"
                        alt="AirEstate Template Image"
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65e0d511c2eedfe3d629f0e7_1.jpg"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          borderRadius: "100%",
                          objectFit: "cover",
                          width: "3rem",
                          minWidth: "3rem",
                          height: "3rem",
                          minHeight: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="testimonial-client-info"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <p
                        className="testimonial-author-name"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontWeight: 700,
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        className="testimonial-author-position"
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          marginTop: "0px",
                          marginBottom: "0px",
                          color: "#484d49",
                          fontSize: "1rem",
                        }}
                      >
                        CEO, ABC Company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
