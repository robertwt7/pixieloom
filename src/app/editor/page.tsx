import { Editor } from "@/components/Editor";
import AuthGuard from "@/components/AuthGuard";

export default function EditorPage() {
  return (
    <AuthGuard>
      <Editor />
    </AuthGuard>
  );
}
