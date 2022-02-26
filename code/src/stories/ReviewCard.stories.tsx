import { Meta, Story } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewCard from "../components/ReviewCard";

const meta: Meta = {
  title: "ReviewCard",
  component: ReviewCard,
};

export default meta;

const Template: Story<{
  name: string;
  photo_url: string;
  review: string;
  age: string;
  textColor: string;
}> = (args) => <ReviewCard {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: "Yellow font color",
  photo_url:
    "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png",
  review: "Review padrão",
  age: "25",
  textColor: "#fca71c",
};

export const RedFontColor = Template.bind({});
RedFontColor.args = {
  name: "Red font color",
  photo_url:
    "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png",
  review: "Review padrão",
  age: "25",
  textColor: "red",
};

export const GreenFontColor = Template.bind({});
GreenFontColor.args = {
  name: "Green font color",
  photo_url:
    "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png",
  review: "Review padrão",
  age: "25",
  textColor: "green",
};
