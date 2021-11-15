import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * 使用react query进行服务端数据的缓存、更新、组件间共享
 */
// 提供 QueryClientProvider
const ReactQueryProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProviders;