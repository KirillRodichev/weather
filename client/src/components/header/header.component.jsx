import React from "react";
import { connect } from "react-redux";
import { BoldSpan, NavBar, NavContainer } from "./header.styles";
import { createStructuredSelector } from "reselect";
import { selectForecastInfo } from "../../redux/selector";

const Header = ({ info }) => {
  return (
    <NavBar>
      <NavContainer>
        Погода в <BoldSpan>{info.tzinfo.name}</BoldSpan>
      </NavContainer>
    </NavBar>
  );
};

const mapStateToProps = createStructuredSelector({
  info: selectForecastInfo,
});

export default connect(mapStateToProps, null)(Header);
