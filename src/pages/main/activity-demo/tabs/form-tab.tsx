import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const FormTab = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Form Tab</h3>
        <p className="text-muted-foreground text-sm">
          Form input values are preserved when switching tabs
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-muted-foreground text-sm">
            <strong>Current values:</strong>
          </p>
          <p className="text-sm">
            Name:{' '}
            {name || <span className="text-muted-foreground">(empty)</span>}
          </p>
          <p className="text-sm">
            Email:{' '}
            {email || <span className="text-muted-foreground">(empty)</span>}
          </p>
        </div>

        <p className="text-muted-foreground text-center text-sm">
          Fill in the form, switch tabs, and come back.
          <br />
          Your input will still be here!
        </p>
      </div>
    </div>
  )
}
