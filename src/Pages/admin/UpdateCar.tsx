import {
  useEditCarMutation,
  useGetSingleCarQuery,
} from "@/redux/Feature/Api/carApi";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCar = () => {
  const { id } = useParams<{ id: string }>();
  const [editCar] = useEditCarMutation();
  const { data, isLoading, isError } = useGetSingleCarQuery(id);

  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2> Something went wrong...</h2>;
  const car = data?.data;
  console.log(data);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const images = Array.from(form.image.files);

    const color = form.color.value;
    const description = form.description.value;
    const pricePerHour = form.pricePerHour.value;
    const features = form.features.value ? form.features.value.split(",") : [];
    const status = form.status.value;
    const isElectric = form.isElectric.value === "true";
    const imageUrls = await Promise.all(
      images.map(async (image: File) => {
        const formData = new FormData();
        formData.append("image", image);

        const response = await axios.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (!response) {
          throw new Error("Image upload failed");
        }

        return response.data.data.url;
      })
    );

    const car = {
      name,
      images: imageUrls,
      color,
      status,
      pricePerHour: Number(pricePerHour),
      description,
      isElectric,
      features,
      isDeleted: false,
    };
    const res = await editCar({ id, car });
    console.log(res?.data);

    if (res?.data?.success) {
      // show success popup
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res?.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      {car && (
        <div className="mt-6 min-h-[100vh-64px]">
          <div className="hero min-h-[100vh] ">
            <div className="card flex-shrink-0  mb-10 w-full max-w-3xl shadow-2xl bg-base-100">
              <form
                className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 "
                onSubmit={handleFormSubmit}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={car.name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Color</span>
                  </label>
                  <input
                    type="text"
                    name="color"
                    defaultValue={car.color}
                    placeholder="color name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={car.description}
                    placeholder="Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">price Per Hour</span>
                  </label>
                  <input
                    type="number"
                    name="pricePerHour"
                    defaultValue={car.pricePerHour}
                    placeholder="Price Per Hour"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Feature</span>
                  </label>
                  <input
                    type="text"
                    name="features"
                    defaultValue={car.features.map((item) => item)}
                    placeholder="features separete with comma"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label" htmlFor="isElectric">
                    <span className="label-text">isElectric</span>
                  </label>
                  <select
                    name="isElectric"
                    defaultValue={car.isElectric}
                    id="isElectric"
                    className="h-12 border rounded-lg"
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="status">
                    <span className="label-text">Is Available</span>
                  </label>
                  <select
                    name="status"
                    id="status"
                    defaultValue={car.status}
                    className="h-12 border rounded-lg"
                  >
                    <option value="available">Available</option>
                    <option value="unavailabel">Unavailable</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Images</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    placeholder="file"
                    className="input input-bordered"
                    multiple
                    required
                  />
                </div>
                <div className="form-control mt-6 col-span-2">
                  <button type="submit" className="btn bg-[#4a869e] text-white">
                    Add Car
                  </button>
                </div>
              </form>
              {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCar;
