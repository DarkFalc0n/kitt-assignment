# Kitt frontend assignment

### To run this project locally
```
pnpm i
pnpm dev
```
### Technologies
#### State Management
- [Zustand](https://zustand-demo.pmnd.rs/)

  A zustand store is used as such:
  
  ```ts
  const useAppStateStore = create<TAppStateStore>((set) => ({
    someState: null,
    setSomeState: () => set((state) => ({ someState: updatedstate })),
  }));
  export { useAppStateStore };
  ```
  Then there is a custom hook in place to consume the zustand store:
  ```ts
    const useAppState = () => {
      const { someState, setSomeState } = useAppStateStore;
      // Do something...
      return { someState, setSomeState };
    };
    export { useAppState };
  ```
  This helps to seperate logic from state.

- [nuqs](https://nuqs.47ng.com/)
  
  Additionally, `useQueryState()` is used to also store the flight search queries. This makes it easy to share/store URL of specific journeys.
  A typical URL would end like this:
  `/flight?from=BOM&to=JFK&depart=1728585000000&return=1729276200000`

#### UI
- [shadcn](https://ui.shadcn.com)
   
  The following components from shadcn were used after being modified to match the theme:
  - Button
  - Drawer
  - Form
  - Datepicker
  - Select
  - Skeleton
-  [TailwindCSS](https://tailwindcss.com/) + [Class Variance Authority](https://cva.style/docs)

   In addition to tailwind classes, the package `class-variance-authority` was used to create variants of components, increasing reusability.
- [Lucide](https://lucide.dev/)
  
   Lucide was the preferred icon library due to vast collection and ease of use in react applications.

#### Schema
- [Zod](https://zod.dev/)
  
  Zod was used to generate schemas for all forms and infer types using `z.infer()`. This provides a type safe way to handle forms and validate user input to provide relevant feedback.

#### Hosting
- [Vercel](https://vercel.com/)
  Vercel was used to host *(and generate incremental deployments for)* the Next App

#### Other

- async handling

  Static data has been stored in the `public/constants/` directory. Wherever possible async functions have been used to fetch this data, to simulate an API call. To test the loading states, this fucntion has been used to create a delay in data fetching:
  ```ts
  export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  ```
