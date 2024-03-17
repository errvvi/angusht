import { FC, ReactNode } from "react";
import cls from "./Text.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

export type TextColor = "black" | "white" | "green";
export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

const colorClasses: Record<TextColor, string> = {
  black: cls.black,
  green: cls.green,
  white: cls.white,
};

interface TextProps {
  className?: string;
  children?: ReactNode;
  color?: TextColor;
  tag?: TextTag;
}

export const Text: FC<TextProps> = (props) => {
  const { className, children, color = "white", tag = "h1" } = props;
  const classes = [color && colorClasses[color], className];
  const Tag = tag;
  return <Tag className={ClassNames("", {}, classes)}>{children}</Tag>;
};
