import { Input } from "@/components/ui/input";
import styles from "./styles.module.css";
import { Label } from "@/components/ui/label";
import Field from "@/components/Field/Field";
import { Button } from "@/components/ui/button";

export default function SubmitPost() {
  return (
    <div className={styles.container}>
      <Field label="Title" placeholder="Title of your post" />
      <Field
        label="Content"
        placeholder="Content of your post"
        type="text-area"
      />
      <Button>Submit</Button>
    </div>
  );
}
