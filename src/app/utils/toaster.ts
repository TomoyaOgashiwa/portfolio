import { toast } from "react-hot-toast";

export const setToaster = (theme: "error" | "success", message: string) => {
  switch (theme) {
    case "error": {
      toast.error(message);
      break;
    }
    case "success": {
      toast.success(message);
      break;
    }
  }
};
