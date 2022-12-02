import React from "react";

type HorizontalRuleProps = {
  className?: string
  title?: string
}

const HorizontalRule = (props: HorizontalRuleProps) => (
    <div className={`flex flex-row justify-center items-center mx-auto ${props.className}`}>
        <hr className="w-full" />
        {props.title && (
            <>
            <span className="mx-2 text-white">OR</span>
            <hr className="w-full" />
            </>
        )}
    </div>
  )

export default HorizontalRule;