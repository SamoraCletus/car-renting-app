import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import "./nav.css";
import FormComponent from "./Form";
import NavbarComponent from "./Navbar";

function Body({
  firstName,
  lastName,
  profilePic,
  stars,
  comment,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  profilePic: string;
  stars: number;
  comment: string;
  timestamp: number;
}) {
  return (
    <>
      <NavbarComponent />
      <Card>
        <CardBody>
          <CardTitle tag="h1">Reviews Page</CardTitle>
          <div className="reviews-top">
            <div className="user-details">
              <CardImg
                className="avatar"
                src={
                  profilePic ||
                  require("../../assets/images/amg-benz-thumbnail.jpg")
                }
                alt="user avatar"
              />

              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {firstName} {lastName || "John Doe"}
              </CardSubtitle>
              {[...Array(stars || 5)].map((star) => {
                return (
                  <CardSubtitle key={Math.random()} tag="h5">
                    ⭐{" "}
                  </CardSubtitle>
                );
              })}
            </div>
            <div className="reviews-body">
              <CardText>
                {comment ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
              </CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">
                {timestamp || "3 mins ago"}
              </small>
            </CardText>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="reviews-top">
            <div className="user-details">
              <CardImg
                className="avatar"
                src={require("../../assets/images/70s-sedan-thumbnail.jpg")}
                alt="user avatar"
              />

              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Jane Doe
              </CardSubtitle>

              <CardSubtitle key={Math.random()} tag="h5">
                ⭐⭐⭐⭐⭐
              </CardSubtitle>
            </div>
            <div className="reviews-body">
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                reiciendis delectus dignissimos, nisi pariatur fuga officiis
                itaque fugiat! Quibusdam accusantium quae beatae vel.Quas
                possimus reprehenderit sequi quia nesciunt sunt!
              </CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">5 mins ago</small>
            </CardText>
          </div>
        </CardBody>
      </Card>
      <FormComponent />
    </>
  );
}

export default Body;
