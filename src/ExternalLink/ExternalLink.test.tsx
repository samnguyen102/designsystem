// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ExternalLink from "./ExternalLink";
import { ExternalLinkProps } from "./ExternalLink.types";

describe("Test Component", () => {
  let props: ExternalLinkProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ExternalLink {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ExternalLink");

    expect(component).toHaveTextContent("harvey was here");
  });
});
