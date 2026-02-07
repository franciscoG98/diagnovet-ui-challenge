"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { useTransition } from "react"
import { useRouter, usePathname } from "@/i18n/routing"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  children: React.ReactNode
  defaultValue: string
  label: string
}

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: string) {
    const nextLocale = value
    startTransition(() => {
      router.replace(
        { pathname, query: params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger aria-label={label}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  )
}
