type UserTemplateProps = {
    title: string;
    paragraph: string;
};
const UserCompo = ({title , paragraph} : UserTemplateProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-xl font-semibold">{paragraph}</p>
    </div>
  )
}

export default UserCompo
