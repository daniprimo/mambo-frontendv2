import React, { useEffect, useState } from "react";
import { bucsarViagemPorId } from "../../service";

export default function Status(props) {

  const [status, setStatus] = useState()

  useEffect(() => {
    bucsarViagemPorId(props.id).then((resp) => {
      setStatus(resp.data.status);
      console.log(status)
    }).catch(err => console.log(err))
  })

  return (
    <div className="space-y-12 m-1">
      <div class="mt-1 flex items-center gap-x-4.5">
        <div class="flex-none rounded-full bg-blue-200 p-1">
          <div class="h-3.5 w-3.5 rounded-full bg-blue-600"></div>
        </div>
        <p class="text-xs leading-5 text-blue">{status}</p>
      </div>
    </div>
  );
}
