import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _updateUser } from "../store/actions/user";
import { ImageUploaderWithPreview } from "./";

const Profile = () => {
  const [imageFile, setImageFile] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const submit = () => {    
    const updatedForm = {
      ...user,
      fullname,
      email,
      image: imageFile,
    };

    dispatch(_updateUser(user._id, updatedForm));
  };

  useEffect(() => {
    if (user) {
      setFullname(user.fullname);
      setEmail(user.email);
      setImageFile(user.image);
    }
  }, [user]);

  return (
    <div className="profile">
      <div className="profile__image">
        <label>
          <ImageUploaderWithPreview
            setImage={setImageFile}
            previewImage={imageFile}
          />
        </label>
      </div>
      <div className="profile__info">
        <label>
          <span>Full Name</span>
          <input
            value={fullname}
            onChange={handleFullnameChange}
            placeholder="Full Name"
            type="text"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
          />
        </label>
        <div className="profile__info__button">
          <button onClick={submit}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
