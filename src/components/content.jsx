import Card from "./card"
export default function Content(props) {
  return (
    <>
      <h1 className="text-3xl font-semibold my-5 underline decoration-pink-500 capitalize">{props.title}</h1>
      {props.button
        ? <button className="bg-slate-500 p-1 rounded-lg mb-5 capitalize">Add New {props.title}</button>
        : null
      }
      <div className="grid grid-cols-4 gap-4 ">
        {
          props.data.map(value => {
            return <Card
              key={value.id}
              data={value}
              type={props.title}
            />
          })
        }
      </div>
    </>
  )
}