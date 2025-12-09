import { useState } from 'react'

import { Label } from '@/components/ui/label'

export const ContactTab = () => {
  const [message, setMessage] = useState('')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Contact Tab</h3>
        <p className="text-muted-foreground text-sm">
          Textarea content and DOM state is preserved
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[150px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-muted-foreground text-sm">
            <strong>Character count:</strong> {message.length}
          </p>
        </div>

        <p className="text-muted-foreground text-center text-sm">
          Type a message, switch to other tabs, then come back.
          <br />
          The textarea content will be preserved!
        </p>
      </div>
    </div>
  )
}
