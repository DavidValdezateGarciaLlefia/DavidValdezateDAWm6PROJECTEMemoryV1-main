export function Avatar({usuario}){
    const {email} = usuario
    return(
      <div className="flex gap-2 items-center">
        <div>{email}</div>
        <div className="w-[50px] h-[50px] border rounded-full overflow-hidden">
         
        </div>
      </div>
    )
  }