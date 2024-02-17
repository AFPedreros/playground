"use client";

import { Icon } from "@iconify/react";
import type { ListboxProps, ListboxSectionProps } from "@nextui-org/react";
import {
  Listbox,
  ListboxItem,
  ListboxSection,
  Tooltip,
  cn,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, useCallback } from "react";

export type SidebarItem = {
  key: string;
  title: string;
  icon?: string;
  href?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  items?: SidebarItem[];
  className?: string;
};

export type SidebarProps = Omit<ListboxProps<SidebarItem>, "children"> & {
  items: SidebarItem[];
  isCompact?: boolean;
  hideEndContent?: boolean;
  iconClassName?: string;
  sectionClasses?: ListboxSectionProps["classNames"];
  classNames?: ListboxProps["classNames"];
  defaultSelectedKey: string;
  onSelect?: (key: string) => void;
};

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      items,
      isCompact,
      hideEndContent,
      sectionClasses: sectionClassesProp = {},
      itemClasses: itemClassesProp = {},
      iconClassName,
      className,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();
    const pathname = usePathname();

    const sectionClasses = {
      ...sectionClassesProp,
      base: cn(sectionClassesProp?.base, {
        "p-0 max-w-[44px]": isCompact,
      }),
      group: cn(sectionClassesProp?.group, {
        "flex flex-col gap-1": isCompact,
      }),
      heading: cn(sectionClassesProp?.heading, {
        hidden: isCompact,
      }),
    };

    const itemClasses = {
      ...itemClassesProp,
      base: cn(itemClassesProp?.base, {
        "w-11 h-11 gap-0 p-0": isCompact,
      }),
    };

    const renderItem = useCallback(
      (item: SidebarItem) => {
        return (
          <ListboxItem
            textValue={item.title}
            key={item.key}
            startContent={
              isCompact ? null : item.icon ? (
                <Icon
                  className={cn(
                    "text-default-500 group-data-[selected=true]:text-primary",
                    iconClassName,
                  )}
                  icon={item.icon}
                  width={24}
                />
              ) : (
                item.startContent ?? null
              )
            }
            endContent={
              isCompact || hideEndContent ? null : item.endContent ?? null
            }
            onPress={() => router.push(item.href || "")}
          >
            {!isCompact && item.title}
            {isCompact && (
              <Tooltip content={item.title} placement="right">
                <div className="flex w-full items-center justify-center">
                  {item.icon ? (
                    <Icon
                      className={cn(
                        "text-default-500 group-data-[selected=true]:text-primary",
                        iconClassName,
                      )}
                      icon={item.icon}
                      width={24}
                    />
                  ) : (
                    item.startContent ?? null
                  )}
                </div>
              </Tooltip>
            )}
          </ListboxItem>
        );
      },
      [isCompact, hideEndContent, iconClassName, router.push],
    );

    return (
      <Listbox
        key={isCompact ? "compact" : "default"}
        ref={ref}
        as="nav"
        aria-label="Sidebar"
        hideSelectedIcon
        className={cn("list-none p-0", className)}
        color="primary"
        itemClasses={{
          ...itemClasses,
          base: cn(
            "px-3 rounded-full h-[40px] data-[selected=true]:bg-primary/20 ",
            itemClasses?.base,
          ),
          title: cn(
            "text-small font-medium text-default-500 group-data-[selected=true]:text-foreground",
            itemClasses?.title,
          ),
        }}
        items={items}
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        selectionMode="single"
        variant="flat"
        {...props}
      >
        {(item) =>
          item.items && item.items?.length > 0 ? (
            <ListboxSection
              key={item.key}
              classNames={sectionClasses}
              showDivider={isCompact}
              title={item.title}
            >
              {items.map((item) => renderItem(item))}
            </ListboxSection>
          ) : (
            renderItem(item)
          )
        }
      </Listbox>
    );
  },
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
