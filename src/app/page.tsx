"use client";

import { useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState(null);  // 用于存储从 API 返回的数据
  const [loading, setLoading] = useState(false);  // 用于指示是否正在加载数据
  const [error, setError] = useState<string | null>(null);  // 用于存储错误信息

  // 按钮点击事件：向后端发送请求
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/");  // 假设后端接口路径是 /api/data
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setApiData(data);  // 更新 API 数据
    } catch (err) {
      if(err instanceof Error){
        setError(err.message);  // 打印错误信息
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          onClick={fetchData}
          className="mt-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Fetch API Data
        </button>

        {loading && <p className="mt-4 text-gray-500">Loading...</p>}

        {error && <p className="mt-4 text-red-500">Error: {error}</p>}

        {apiData && (
          <div className="mt-4 p-4 border border-gray-200 rounded">
            <h3 className="font-bold">API Response:</h3>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
