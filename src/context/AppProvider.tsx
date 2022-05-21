import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

/**
 * 使用react query进行服务端数据的缓存、更新、组件间共享
 */
// 提供 QueryClientProvider
const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppProvider;
