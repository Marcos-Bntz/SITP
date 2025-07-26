import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          {event.date}
          <MapPin className="w-4 h-4 ml-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center mt-2">
          <Users className="w-4 h-4 mr-2 text-emerald-600" />
          <span className="text-sm text-gray-500">{event.attendees} asistentes</span>
        </div>
      </CardContent>
    </Card>
  );
}