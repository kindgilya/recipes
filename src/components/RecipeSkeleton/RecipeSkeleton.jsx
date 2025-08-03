import ContentLoader from "react-content-loader";
// import "react-loading-skeleton/dist/skeleton.css";

const RecipeSkeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={310}
      height={500}
      viewBox="0 0 310 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="-2" rx="3" ry="3" width="309" height="252" />
      <rect x="6" y="265" rx="0" ry="0" width="231" height="17" />
      <rect x="5" y="290" rx="0" ry="0" width="84" height="16" />
      <rect x="4" y="316" rx="0" ry="0" width="122" height="22" />
      <rect x="35" y="355" rx="0" ry="0" width="242" height="14" />
      <rect x="35" y="374" rx="0" ry="0" width="242" height="14" />
      <rect x="35" y="392" rx="0" ry="0" width="242" height="14" />
      <rect x="35" y="410" rx="0" ry="0" width="242" height="14" />
      <circle cx="18" cy="361" r="7" />
      <circle cx="18" cy="382" r="7" />
      <circle cx="18" cy="416" r="7" />
    </ContentLoader>
  );
};

export default RecipeSkeleton;
