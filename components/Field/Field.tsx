import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import styles from "./styles.module.css";
type FiedProps = {
  label: string;
  placeholder: string;
  type?: "text-area" | "input";
};

export default function Field(props: FiedProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="picture">{props.label}</Label>
      {((!props?.type || props.type === "input") && (
        <Input placeholder={props.placeholder} />
      )) || <Textarea placeholder={props.placeholder} />}
    </div>
  );
}
