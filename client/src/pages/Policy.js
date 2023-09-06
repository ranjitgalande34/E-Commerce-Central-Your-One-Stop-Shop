import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><strong>Privacy Policy:</strong> We respect your privacy and protect your data; we don't share personal information with third parties.</p>
          <p><strong>Cookie Policy:</strong> We use cookies to enhance your browsing experience and improve our site's functionality.</p>
          <p><strong>Security Policy:</strong> Your data's security is a priority; we employ industry-standard measures to protect it.</p>
          <p><strong>Refund Policy:</strong> If you're not satisfied, we offer a hassle-free refund process, subject to our terms and conditions.</p>
          <p><strong>Shipping Policy:</strong> Learn about our shipping options, delivery times, and tracking details.</p>
          <p><strong>Terms of Service:</strong> Familiarize yourself with our terms and conditions for using our website and services.</p>
          <p><strong>Contact Us:</strong> Reach out to our support team for any inquiries or assistance; we're here to help.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;