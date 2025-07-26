import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Proposal } from '../../types';

interface ProposalCardProps {
  proposal: Proposal;
  onVote: (id: string) => void;
}

export function ProposalCard({ proposal, onVote }: ProposalCardProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">{proposal.title}</h3>
        <p className="text-gray-600 mb-2">{proposal.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{proposal.votes} votos</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onVote(proposal.id)}
          >
            Votar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}