import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          fontSize: 200,
        }}
      >
        <div tw="bg-black flex">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-16">
            <h2 tw="flex flex-col text-2xl sm:text-4xl font-bold tracking-tight text-gray-300 text-left">
              <span>Don{`'`}t know what to cook?</span>
              <span tw="text-green-600">Let Artificial Recipes help you.</span>
            </h2>
            <div tw="mt-8 flex md:mt-0">
              <div tw="flex rounded-md shadow">
                <a
                  href="#"
                  tw="flex items-center justify-center rounded-md border border-transparent bg-green-700 px-5 py-3 text-base font-medium text-white"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "twemoji",
    },
  );
}
