import CircleAvatar from "../atoms/circle-avatar";

interface ProfileCardProps {
  name: string;
  role: string;
  profile: {
    age: number;
    residence: string;
    freelance: "available" | "busy";
    email: string;
  };
}

/**
 * This molecule component is a profile card that displays the profile information.
 * Also, it displays the profile picture with the name and role of the user.
 *
 * @param {string} name - The name of the user.
 * @param {string} role - The role of the user.
 * @param {ProfileCardProps} profile - The profile information of the user.
 * @returns {React.ReactNode} The profile card.f
 */
const ProfileCard = ({ name, role, profile }: ProfileCardProps) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 mb-12">
        <CircleAvatar status={profile.freelance} />
        <h3 className="font-medium text-lg">{name}</h3>
        <p>{role}</p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        {Object.entries(profile).map(([key, value], index) => (
          <div key={`card-prop-${index}`} className="flex justify-between">
            <span className="font-medium capitalize">{key}:</span>
            <span
              className={value === "available" ? "text-green capitalize" : ""}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProfileCard;
