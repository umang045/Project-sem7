import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function generateExtraReducers(thunk, name) {
  return (builder) => {
    builder
      .addCase(thunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state[name] = action.payload;
        switch (name) {
          case "addKacheri":
            toast.success("Kacheri added Succesfully");
            break;
          case "addVibhag":
            toast.success("Vibhag added Succesfully");
            break;
          case "delKacheri":
            toast.success("Kacheri deleted Succesfully");
            break;
          case "delVibhag":
            toast.success("Vibhag deleted Succesfully");
            break;
          case "updateKacheri":
            toast.success("Kacheri updated Succesfully");
            break;
          case "information":
            toast.success("Information added Succesfully");
            break;
          case "floors":
            toast.success("floors added Succesfully");
            break;
          case "delFloorsInfo":
            toast.success("info deleted Succesfully");
            break;
          default:
            break;
        }
      })
      .addCase(thunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        toast.error(`Error: ${action.error}`);
      });
  };
}
